import { Col } from "react-bootstrap";

export const StoryCard = ({ title, description, imgUrl, alt }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="story-imgbx">
        <img loading="lazy" alt={alt} src={imgUrl} />
        <div className="story-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
