export function getFAQs() {
    const data = [
        {
            question: 'How to become the member of this site?',
            answer: 'Just Go to the Registration Form, and create an account Its totally free, FOR NOW!',
            image: 'join us.jpg',
        },
        {
            question: 'Will there be any subscription charges?',
            answer: 'This Site is still in beta release, so for now, our site is totally free.   When our site is published, it will cost only 3$ for monthly subscription, 30$ yearly subscription, and for those early accesses, 30% discount !',
            image: 'charges_and_fees.jpg',
        },
        {

            question: 'How to view the recipes and tips? Will there be any charges for that?',
            answer: 'During the beta release, There are 2 Types of content, Free and Prime. You can view any free content, and when the transaction function is ready, you can buy prime recipes',
            image: 'premium.png',
        },
        {
            question: 'I am not the registered member of the site. Can I participate in the contest held?',
            answer: ' NO YOU CAN CREATE YOUR ACCOUNT, JOIN US ! ',
            image: 'no_access.png'
        },
        {
            question: 'How to upload or post the recipes and tips?',
            answer: 'For recipes, on the top bar, just click on submit recipe, and fill your recipe.   For tips, go to the home page, scroll to the bottom to the tips section, and fill your tip.',
            image: 'tips_and_submit.png'
        },
        {
            question: 'How to post a feedback?',
            answer: 'on th top bar, click on Feedback Button.   This will open you a form, fill it, click submit, we will happily receive it and review it. We Appreciate Your Feedback',
            image: 'feedback.png',
        },
        {
            question: 'I have posted a recipe or a tip with respect to the contest. How can I know who is the winner',
            answer: 'Check the latest news section in the main menu.   Once the result are ready, we will publish them there.',
            image: 'contest_winner.png'
        },

    ]
    let chunk1 = 0
    let chunk2 = 0
    let flag1 = 1
    let flag2 = 1

    while (flag1) {
        chunk1 = Math.floor(Math.random() * 10);
        if (chunk1 < 6) flag1 = 0
    }
    while (flag2) {
        chunk2 = Math.floor(Math.random() * 10);
        if (chunk2 < 6) flag2 = 0
    }
    if (chunk1 > chunk2)
        return data.slice(chunk2, chunk1);


    if (chunk2 > chunk1)
        return data.slice(chunk1, chunk2);


    return data
}