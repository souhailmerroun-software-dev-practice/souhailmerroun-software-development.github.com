import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Software development</h1>
      <p>
        Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.
      </p>
      <h1>Solution stack</h1>
      <p>
        Software stack is a set of software subsystems or components needed to create a complete platform.
      </p>
    </main>
  )
}

export default IndexPage;
