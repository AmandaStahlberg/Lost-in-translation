const ProfileHeader = ({username}) => {
    return (
       <header>
        <h4 className="font-extrabold text-4xl pt-36 mb-10 md:p-15 text-center">Hello, welcome back { username }!</h4>
       </header>
    )
}

export default ProfileHeader