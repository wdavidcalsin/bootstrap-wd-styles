# Framework simple creado en SCSS y typescript que es complatible con react

Para estilizar nuestro sitio web de manera mas rapida, ya que es complatiple con todo tipo de proyectos ya que no es solo para proyectos react, sino que tambien se puede adaptar a un proyecto basico.

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
