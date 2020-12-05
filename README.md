# Simple framework created in SCSS and typescript that is compliant with react

To stylize our website more quickly, as it is compliant with all types of projects as it is not only for react projects, but can also be adapted to a basic project.

&nbsp;

## Install

```
 npm i bootstrap-wd-styles
```

&nbsp;

## Element

&nbsp;

> ## Button

---

<!-- &nbsp; -->

```tsx
import { Button } from "bootstrap-wd-styles/components";

function Home() {
   return (
      <Button bg={`green`} size={`x`} type="button">
         Click
      </Button>
   );
}
```

&nbsp;

> ## Badge

---

<!-- &nbsp; -->

```tsx
import { Badge } from "bootstrap-wd-styles/components";

function Home() {
   return (
      <Badge bg={`green`} size={`m`}>
         Click
      </Badge>
   );
}
```

&nbsp;

> ## Alert

---

<!-- &nbsp; -->

```tsx
import { Alert } from "bootstrap-wd-styles/components";

function Home() {
   return <Alert isShown={true} content="lorem iipsum alert" bg="green" />;
}
```
