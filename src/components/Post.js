import React from "react"
import { Card, Button } from "react-bootstrap"
import ps from "./Post.module.scss"

const Post = props => (
  <div className="p-3 col-lg-4 d-flex align-items-stretch">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
        <Card.Text
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
          className="mb-5"
        />
        <Button variant="primary" href={props.readMore} className={ps.button}>
          Read more...
        </Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post
