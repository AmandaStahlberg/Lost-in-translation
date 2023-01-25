import ProfileClearHistory from "./ProfileClearHistory"
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
    const listOfMaxTen = translations.slice(-10)

    const translationList = listOfMaxTen.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation} translation={translation} />)

    return (
        <section className="bg-green rounded-3xl flex flex-col p-4 min-h-[30rem] min-w-[15rem] w-4/5 items-center" >
            <div className="flex flex-wrap justify-center md:relative w-full">
            <ProfileClearHistory/>
            <h4 className="font-extrabold text-2xl align-center">Your translation history</h4>
            </div>
            
            { translationList.length ===0 && <p>You have no previous translations</p> }

            <ul className="flex flex-col items-center">
                { translationList }
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory