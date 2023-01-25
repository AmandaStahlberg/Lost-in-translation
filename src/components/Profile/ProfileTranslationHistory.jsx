import ProfileClearHistory from "./ProfileClearHistory"
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
    const listOfMaxTen = translations.slice(-10)

    const translationList = listOfMaxTen.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation} translation={translation} />)

    return (
        <section className="bg-green rounded-3xl flex flex-col p-4 min-h-[30rem] min-w-[15rem] w-4/5 items-center" >
            <ProfileClearHistory/>
            <h4>Your translation history</h4>
            
            { translationList.length ===0 && <p>You have no previous translations</p> }

            <ul className="flex flex-col items-center">
                { translationList }
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory