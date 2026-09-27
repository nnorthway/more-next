import styles from "./MeetupDetail.module.css"

export default function MeetupDetail(props) {
  return <div className={styles.meetup_item}>
    <img src={props.image} alt={props.title} />
    <div className={styles.content}>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </div>
  </div>
}