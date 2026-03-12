'use client'

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-9 mx-auto" onClick={() => console.log('CLICK')}>ExploreBtn </button>  // use client if not used will give error
            <a href="#events">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="arrow-down" width={19} height={19} />
            </a>
    )
}
explore default ExploreBtn