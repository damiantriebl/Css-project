import BeforeAfter from "./BeforeAfter/BeforeAfter"
import Flex from "./Flex/Flex"
import Grid from "./Grid/Grid"
import PseudoClass from "./PseudoClass/PseudoClass"

export const routerPath = [
  {
    path: "/",
    element: <PseudoClass />,
  },
  {
    path: "/beforeAfter",
    element: <BeforeAfter />,
  },
  {
    path: "/Flex",
    element: <Flex />,
  },
  {
    path: "/Grid",
    element: <Grid />,
  },
]