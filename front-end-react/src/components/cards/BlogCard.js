import React from 'react';
import '../styles/blogCard.css';

function formatMainImage(itemThumbnail){
    let parser = new DOMParser()
    let doc = parser.parseFromString(itemThumbnail, 'text/html')
    let thumbnail=doc.querySelector('img')
    return thumbnail? thumbnail.src:null;
}

function formatHtmlContent(htmlContent) {
    // Initialize formatted text
    let formattedText = "";
    
    // Use a regex to find the first <figure> block containing an <img>
    const figureWithImageRegex = /<figure>.*?<img[^>]*>.*?<\/figure>/i;
    const imgSrcRegex = /<img[^>]*src="([^"]*)"/i;
    
    const firstFigureMatch = htmlContent.match(figureWithImageRegex);
    
    if (firstFigureMatch) {
        // Extract the src attribute of the image
        const imgSrcMatch = firstFigureMatch[0].match(imgSrcRegex);
        const imgSrc = imgSrcMatch ? imgSrcMatch[1] : null;
        
        // if (imgSrc) {
        //     formattedText += `Image: ${imgSrc}\n\n`;
        // }
        
        // Remove the first <figure> block from the HTML content
        htmlContent = htmlContent.replace(figureWithImageRegex, '');
    }
    
    // Parse the remaining HTML to process paragraphs and lists
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    // Process paragraphs
    const paragraphs = doc.querySelectorAll('p');
    paragraphs.forEach((p) => {
        formattedText += `${p.textContent.trim()}\n\n`;
    });
    
    // Process unordered/ordered lists
    const listItems = doc.querySelectorAll('ul > li, ol > li');
    if (listItems.length > 0) {
        formattedText += `Highlights:\n`;
        listItems.forEach((li, index) => {
            formattedText += `${index + 1}. ${li.textContent.trim()}\n`;
        });
        formattedText += `\n`;
    }
    
    return formattedText.trim()
}
class BlogCard extends React.Component {
    
    render() {
        const { post } = this.props;
        
        // we need to process the image:
        let thumbnailSrc=formatMainImage(post.content)
        
        //we need to process the content
        let processedContent = formatHtmlContent(post.content)
        
        // Split the processed content into paragraphs
        let contentParagraphs = processedContent.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
        
        return (
            <div className="post card">
            <div className="img-container">
            <a href={post.link} target="_blank"> 
            <img src={thumbnailSrc}></img> </a>
            </div>
            <div className="card-body">
            <p >{post.pubDate}</p>
            <h2>{post.title}</h2>
            {/* {contentParagraphs} */}
            <a href={post.link}  target="_blank"><i className="waves-effect waves-light btn">Read more...</i></a> 
            </div>
            </div>
        )
    }
}

export default BlogCard;