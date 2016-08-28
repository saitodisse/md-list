// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const PORT = 3001;
const initialData = {
  items: [
    {
      id: '5b93debf-659f-4dc2-bb67-f20f139533b1',
      title: `# cerebral-website-tutorial

The tutorial app for the Cerebral website

# run

\`\`\`sh
# # json server
# #  - http://localhost:3001/
$ mv server/db-example.json server/db.json
$ npm run server

# # cerebral app
# #  - http://localhost:3000/
$ npm run client
\`\`\`

# TODO

- [x] [styles] make items to align to the right
- [x] [signals] allow to enter new value even before server response
- [x] [list] transform data in an object: http://www.cerebraljs.com/documentation/storing_server_data
- [x] [isNew] update $IsNew by id, not by index
- [x] [validation] do not permit blank values
- [x] [item] do not render item if is null
- [x] [server] add a json server
- [x] [signals] delete item from server
- [x] [signals] delete all items from server
- [x] [signals] update item from server

`
    },
    {
      id: '5b93debf-659f-4dc2-bb67-f20f139533b3',
      title: `Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3`
    },
    {
      id: '5b93debf-659f-4dc2-bb67-f20f139533b2',
      title: `Inline-style:

![macro](http://images.nationalgeographic.com/wpf/media-live/photos/000/262/cache/ladybug-macro_26203_600x450.jpg "macro photo")`
    },
  ]
};

server.use(jsonServer.rewriter({
  '/api/': '/',
}));

const router = jsonServer.router(initialData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
