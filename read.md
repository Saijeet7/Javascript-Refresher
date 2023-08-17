The Code you write is not the code that gets executed (like this) in the browser. Instead the code is transformed before it's handed off to the browser.

The Two main reason for it are
1) Raw, unprocessed React code won't execute in the browser (JSX is not a default JavaScript feature)
2) In addition, the code would not be optimized for production (e.g. not minified)

Node JS is not just used to install packages for react, or create project, but are used by tools that build process to run it behind the scenes.