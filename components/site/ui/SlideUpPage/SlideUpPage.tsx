import { Children, cloneElement, JSX } from "react";
import { SlideUpWithBlur } from "../SlideUpElement/SlideUpElement";

export const SlideUpPage = ({ children }: { children: JSX.Element[] }) => {
  let count = 0;
  return Children.map(children, (child) => {
    const childChildren = Children.toArray(child.props.children);

    const wrappedChildren = (
      <SlideUpWithBlur index={count}>
        {childChildren as JSX.Element[]}
      </SlideUpWithBlur>
    );
    count += childChildren.length;

    return cloneElement(child, {}, wrappedChildren);
  });
};
