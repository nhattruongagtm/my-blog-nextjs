---
title: "Next.js page options and how they work"
metaTitle: "Next.js page options and how they work"
metaDesc: "How to use pages in Next.js exploring the options"
socialImage: images/22-09-2021.jpg
date: "2021-09-22"
tags:
  - nextjs
---

### A demo of `react-markdown`

`react-markdown` is a markdown component for React.

👉 Changes are re-rendered as you type.

### Overview

- Follows [CommonMark](https://commonmark.org)
- Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
- Renders actual React elements instead of using `dangerouslySetInnerHTML`
- Lets you define your own components (to render `MyHeading` instead of `h1`)
- Has a lot of plugins

### Syntax highlighting

!> Here is an example of a plugin to highlight code:
[`rehype-highlight`](https://github.com/rehypejs/rehype-highlight).

```js
import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
    {"# Your markdown here"}
  </ReactMarkdown>,
  document.querySelector("#content")
);
```

Pretty neat, eh?

### GitHub flavored markdown (GFM)

For GFM, you can _also_ use a plugin:
[`remark-gfm`](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

|               Status code | Description                                                                                            |
| ------------------------: | :----------------------------------------------------------------------------------------------------- |
|                    200 OK | The request succeeded.                                                                                 |
|           400 Bad Request | There was a problem with the request. Check the request parameters and JSON format.                    |
|          401 Unauthorized | Check that the authorization header is correct.                                                        |
|             403 Forbidden | You are not authorized to use the API. Confirm that your account or plan is authorized to use the API. |
|     413 Payload Too Large | Request exceeds the max size of 2MB. Make the request smaller than 2MB and try again.                  |
|     429 Too Many Requests | Temporarily restricting requests because rate-limit has been exceeded by a large number of requests.   |
| 500 Internal Server Error | There was a temporary error on the API server.                                                         |

~~strikethrough~~

- [ ] task list
- [x] checked item

https://example.com

### HTML in markdown

?> HTML in markdown is quite unsafe, but if you want to support it, you can
use.
You should probably combine it with.

### Customize Table

|                                         Feature | Support                                                                         |
| ----------------------------------------------: | :------------------------------------------------------------------------------ |
|     <p label="required" type="String">scope</p> | Permissions granted to the access token. To learn more about scopes, see Scopes |
| <p label="optional" type="String">client_id</p> | Channel ID for which the access token is issued                                 |
|                 <p type="Number">expires_in</p> | Number of seconds until the access token expires.                               |

### remark-hint plugin

!> Here is a tip.

?> And a warning.

x> Or an error.

### blockqoute

#### simple blockqoute

> 👆 see you!

#### nested blockqoute

> nested quote
>
> > nested quote
> >
> > > 👆 see you!

---

#### More info?

Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!
