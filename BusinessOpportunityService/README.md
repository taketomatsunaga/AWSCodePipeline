# Business Opportunity

## Prerequisite

- Node.js v14.16.1(lts/fermium)

## Installtion

```
npm install
```

## Run Test

Test report and coverage report will be in reports and coverage directories of current directory.

```
npm test
```

## Run

```
node -e 'require("./index").handler({ operation: "GetUser", id: 1 })'
```

## Tips

- Configure test threshold in package.json. ex) statement: 60
