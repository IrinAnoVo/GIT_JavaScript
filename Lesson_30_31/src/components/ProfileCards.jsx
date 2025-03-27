import ProfileCard from "./ProfileCard.jsx"
import ProfileStyles from "./ProfileCard.module.css"

/*export default function ProfileCards() {
  return (
    <section className="profile-cards">
      <ProfileCard username="John" email="john@gmail.com"/>
      <ProfileCard username="Jane" email="jane@gmail.com" />
      <ProfileCard username="Jack" email="jack@gmail.com"/>
      <ProfileCard username="Mike" />
    </section>
  )}
*/

export default function ProfileCards() {
  const profiles = [
    {username: "John", email: "john@gmail.com", phone: 123},
    {username: "Jane", email: "jane@gmail.com", phone: 123},
    {username: "Jack", email: "jack@gmail.com", phone: 123},
    {username: "Mike", email: "mike@gmail.com", phone: 123},
    {username: "Sara", email: "sara@gmail.com", phone: 123}
  ]
  return (
    <section className={ProfileStyles["profile-cards"]}>
      {
        
        profiles.map(({username, email, phone}) => {
          return <ProfileCard username={username} email={email} phone={phone} key={email} />          
        })
        /*
        profiles.map((profileObj, index) => {
          return <ProfileCard key={index} {...profileObj} />
        })
        */
      }
    </section>
  )
}