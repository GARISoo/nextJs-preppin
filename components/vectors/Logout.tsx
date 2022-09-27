import * as React from "react"
import { SVGProps } from "react"

const LogoutSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={21}
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.208.083h14.584a1.042 1.042 0 0 1 1.041 1.042v18.75a1.042 1.042 0 0 1-1.041 1.042H1.207a1.041 1.041 0 0 1-1.041-1.042V1.125A1.042 1.042 0 0 1 1.208.083Zm4.167 9.375V6.333L.167 10.5l5.208 4.167v-3.125h6.25V9.458h-6.25Z"
    />
  </svg>
)

export default LogoutSvg
