import { Children, cloneElement, JSX } from "react";
import { SlideUpWithBlur } from "../SlideUpElement/SlideUpElement";

export const SlideUpPage = ({ children }: { children: JSX.Element[] }) => {
  let count = 0;
  return Children.map(children, (child) => {
    const childChildren = child.props.children;
    if (!childChildren) return child;

    const wrappedChildren = (
      <SlideUpWithBlur index={count}>
        {Children.toArray(childChildren) as JSX.Element[]}
      </SlideUpWithBlur>
    );
    count += childChildren.length;

    return cloneElement(child, {}, wrappedChildren);
  });
};
