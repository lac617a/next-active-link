# Usage

```js
export const SampleLink = ({ href, ...props }) => {
  return (
    <NavLink href={href} activeClassName="active">
      Home
    </NavLink>
  );
};
```