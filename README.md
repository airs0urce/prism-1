# Prism.js MongoDB Partial Syntaxes

Here is list of new syntaxes:

- mongodb-aggregation (MongoDB Aggregation)
- mongodb-document (MongoDB Document)
- mongodb-update (MongoDB Update)
- mongodb-filter (MongoDB Filter)

#### [How to use the new syntaxes](#how-to-use-the-new-syntaxes)  
#### [How to edit syntaxes before using](#how-to-edit-syntaxes-before-using)

---

Each syntax highlights only JS object sent as part of query. For example:

mongodb-filter will highlight this:
```
{
    age: {$gt: 18},
    children: {$exists: true}
}
```

mongodb-update will highlight this:
```
{
    $set: {age: 20},
    $inc: {children: 2}
}
```

etc.

Recently I contributed "mongodb" syntax to Prism.js. It extends javascript syntax and highlights all MongoDB keywords like $get, $set, $where, $gt, etc, so all types of keywords (query, aggregation, update) and also functions like ObjectId(), Timestamp(), etc. Here you can read discussion in these two pull requests:  
https://github.com/PrismJS/prism/pull/2502  
https://github.com/PrismJS/prism/pull/2518

So, all feature were implemented in one syntax. But for my project (https://github.com/airs0urce/punkmongo) I need support of partial mongodb syntaxes, because when I highlight "update" part of query I don't want Prism.js to highlight $lt, $gt or any other operations used only in "filter" part of query.
As creating of sub-languages is not the approach Prism.js follow, I had to create this fork and add new syntaxes to be able to highlight only certain part of query. 

Note: if you don't need partial highlighting for mongodb, you can use "mongodb" syntax which is merged to main Prism.js repo.


#### How to use the new syntaxes

Clone repo https://github.com/airs0urce/prism-mongodb
```
$ git clone https://github.com/airs0urce/prism-mongodb  
$ cd prism-mongodb
$ npm install  
```

Run http server inside prism-mongodb folder
```
$ cd prism-mongodb
$ npm install -g http-server
$ http-server -c-1
```

See what port http server started on and go to download.html, for example:
http://127.0.0.1:8080/download.html

Select "Minified version" and in Languages check syntaxes you need, go to page bottom and click "Download JS" and "Download CSS".


#### How to edit syntaxes before using

Clone repo https://github.com/airs0urce/prism-mongodb.
```
$ git clone https://github.com/airs0urce/prism-mongodb  
$ cd prism-mongodb
$ npm install  
```

Run http server inside prism-mongodb folder
```
$ cd prism-mongodb
$ npm install -g http-server
$ http-server -c-1
```

See what address http server started on and go to test.html, for example:
Open http://127.0.0.1:8080/test.html

On this page select any of mongo syntaxes:

- MongoDB Aggregation
- MongoDB Document
- MongoDB Update
- MongoDB Filter

And then on this page you can check how highlight works.
To change syntaxes edit these files:

```
components/prism-mongodb-aggregation.js
components/prism-mongodb-document.js
components/prism-mongodb-update.js
components/prism-mongodb-filter.js
```

After edit you have to refresh page.

When you finish editing syntaxes:

1) Delete old minified version:
```
$ rm -f components/prism-mongodb-aggregation.min.js
$ rm -f components/prism-mongodb-document.min.js
$ rm -f components/prism-mongodb-update.min.js
$ rm -f components/prism-mongodb-filter.min.js
```

2) Build:
```
$ npm run build
```

3) Start http server if not started yet:
```
$ http-server -c-1
```

4) See what port http server started on and go to download.html, for example:
http://127.0.0.1:8080/download.html

Select "Minified version" and in Languages check syntaxes you need, go to page bottom and click "Download JS" and "Download CSS".



