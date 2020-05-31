const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions


        if (node.internal.type === 'MarkdownRemark'){
            const slug = path.basename(node.fileAbsolutePath, '.md')

            createNodeField({
                node,
                name: 'slug',
                value: slug
            })
        }
    
    
}

module.exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // 1. Gett path to template
    // 2. Get markdown data
    // 3. Create new pages

}