const ProfileHeader = ({username}) => {
    return (
       <header>
        <h4 className="font-extrabold text-4xl">Hello, welcome back { username }!</h4>
       </header>
    )
}

export default ProfileHeader