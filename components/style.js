// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
}

type HOC = Props => React.Node

export default (styles: string, Component: React.ComponentType<*>): HOC =>
  function Styles({ children, ...props }: Props) {
    return (
      <style jsx>
        <Component {...props} />
        {styles}
      </style>
    )
  }

// type StyleProps = {
//   children: React.Node,
// }

// type HOC = StyleProps => React.Node

// const stylesComp = (styles: string, Component: React.ComponentType<*>): HOC =>
//   function Styles({ children, ...props }: StyleProps) {
//     return (
//       <style jsx>
//         <Component {...props} />
//         {styles}
//       </style>
//     )
//   }
