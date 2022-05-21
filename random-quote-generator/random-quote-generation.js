function quoteGenerator() {

    //JASON file
    var quotes = '{"quotes":[' +
    '{"quote":"&#34;Be who you are and say what you feel, because those who mind don&#39;t matter and those who matter don&#39;t mind.&#34;", "author":"Bernard M. Baruch"},' +
    '{"quote":"&#34;We must not allow other people&#39;s limited perceptions to define us.&#34;", "author":" - Virginia Satir"},' +
    '{"quote":"&#34;Do what you can, with what you have, where you are.&#34;", "author":" - Theodore Roosevelt"},' +
    '{"quote":"&#34;Be yourself; everyone else is already taken.&#34;", "author":" - Oscar Wilde"},' +
    '{"quote":"&#34;This above all: to thine own self be true.&#34;", "author":" - William Shakespeare"},' +
    '{"quote":"&#34;If you cannot do great things, do small things in a great way.&#34;", "author":" - Napoleon Hill"},' +
    '{"quote":"&#34;If opportunity doesn&#39;t knock, build a door.&#34;", "author":" - Milton Berle"},' +
    '{"quote":"&#34;Wise men speak because they have something to say; fools because they have to say something.&#34;", "author":" - Plato"},' +
    '{"quote":"&#34;Strive not to be a success, but rather to be of value.&#34;", "author":" - Albert Einstein"},' +
    '{"quote":"&#34;Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.&#34;", "author":" - Robert Frost"},' +
    '{"quote":"&#34;Do not let what you cannot do interfere with what you can do.&#34;", "author":" - John Wooden"},' +
    '{"quote":"&#34;Whenever you find yourself on the side of the majority, it is time to pause and reflect.&#34;", "author":" - Mark Twain"},' +
    '{"quote":"&#34;I haven&#39;t failed. I&#39;ve just found 10,000 ways that won&#39;t work.&#34;", "author":" - Thomas Edison"},' +
    '{"quote":"&#34;A journey of a thousand leagues begins beneath one&#39;s feet.&#34;", "author":" - Lao Tzu"},' +
    '{"quote":"&#34;I&#39;ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.&#34;", "author":" - Maya Angelou"},' +
    '{"quote":"&#34;Either you run the day, or the day runs you.&#34;", "author":" - Jim Rohn"},' +
    '{"quote":"&#34;Life shrinks or expands in proportion to one&#39;s courage.&#34;", "author":" - Anais Nin"},' +
    '{"quote":"&#34;You must be the change you wish to see in the world.&#34;", "author":" - Mahatma Gandhi"},' +
    '{"quote":"&#34;What you do speaks so loudly that I cannot hear what you say.&#34;", "author":" - Ralph Waldo Emerson"},' +
    '{"quote":"&#34;Believe and act as if it were impossible to fail.&#34;", "author":" - Charles Kettering"},' +
    '{"quote":"&#34;The difference between ordinary and extraordinary is that little extra.&#34;", "author":" - Jimmy Johnson"},' +
    '{"quote":"&#34;The best way to predict the future is to invent it.&#34;", "author":" - Alan Kay"},' +
    '{"quote":"&#34;If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when?&#34;", "author":" - Rabbi Hillel"},' +
    '{"quote":"&#34;Everything has beauty, but not everyone can see.&#34;", "author":" - Confucius"},' +
    '{"quote":"&#34;Believe you can and you&#8217;re halfway there.&#34;", "author":" - Theodore Roosevelt"},' +
    '{"quote":"&#34;How wonderful it is that nobody need wait a single moment before starting to improve the world.&#34;", "author":" - Anne Frank"},' +
    '{"quote":"&#34;Imagination is everything. It is the preview of life&#8217;s coming attractions.&#34;", "author":" - Albert Einstein"},' +
    '{"quote":"&#34;Change your thoughts and you change your world.&#34;", "author":" - Norman Vincent"},' +
    '{"quote":"&#34;Happiness is not something ready made. It comes from your own actions.&#34;", "author":" - Dalai Lama"},' +
    '{"quote":"&#34;Remember that happiness is a way of travel, not a destination.&#34;", "author":" - Roy M. Goodman"},' +
    '{"quote":"&#34;Too many of us are not living our dreams because we are living our fears.&#34;", "author":" - Les Brown"},' +
    '{"quote":"&#34;If you want to lift yourself up, lift up someone else.&#34;", "author":" - Booker T. Washington"},' +
    '{"quote":"&#34;You miss 100% of the shots you don&#8217;t take.&#34;", "author":" - Wayne Gretzky"},' +
    '{"quote":"&#34;It is never too late to be what you might have been.&#34;", "author":" - George Eliot"},' +
    '{"quote":"&#34;A person who never made a mistake never tried anything new.&#34;", "author":" - Albert Einstein"},' +
    '{"quote":"&#34;The person who says it cannot be done should not interrupt the person who is doing it.&#34;", "author":" - Chinese Proverb"},' +
    '{"quote":"&#34;Great minds discuss ideas; average minds discuss events; small minds discuss people.&#34;", "author":" - Eleanor Roosevelt"},' +
    '{"quote":"&#34;You only live once, but if you do it right, once is enough.&#34;", "author":" - Mae West"},' +
    '{"quote":"&#34;If you tell the truth, you don&#8217;t have to remember anything.&#34;", "author":" - Mark Twain"},' +
    '{"quote":"&#34;The only thing worse than being blind is having sight but no vision.&#34;", "author":" - Helen Keller"},' +
    '{"quote":"&#34;To live is the rarest thing in the world. Most people exist, that is all.", "author":" - Oscar Wilde"},' +
    '{"quote":"&#34;Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.&#34;", "author":" - Martin Luther King, Jr."},' +
    '{"quote":"&#34;The only thing we have to fear is fear itself.&#34;", "author":" - Franklin D. Roosevelt"},' +
    '{"quote":"&#34;If you look at what you have in life, you&#8217;ll always have more. If you look at what you don&#8217;t have in life, you&#8217;ll never have enough.&#34;", "author":" - Oprah Winfrey"},' +
    '{"quote":"&#34;Remember no one can make you feel inferior without your consent.&#34;", "author":" - Eleanor Roosevelt"},' +
    '{"quote":"&#34;For every minute you are angry you lose sixty seconds of happiness.&#34;", "author":" - Ralph Waldo Emerson"},' +
    '{"quote":"&#34;Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.&#34;", "author":" - Lao Tzu"},' +
    '{"quote":"&#34;There are two ways of spreading light: to be the candle or the mirror that reflects it.&#34;", "author":" - Edith Wharton"},' +
    '{"quote":"&#34;The road to success and the road to failure are almost exactly the same.&#34;", "author":" - Colin R. Davis"},' +
    '{"quote":"&#34;Motivation is a fire from within. If someone else tries to light that fire under you, chances are it will burn very briefly.&#34;", "author":" - Stephen R. Covey"},' +
    '{"quote":"&#34;In three words I can sum up everything I&#39;ve learned about life: It goes on.&#34;", "author":" - Robert Frost"},' +
    '{"quote":"&#34;Self-reverence, self-knowledge, self control — these three alone lead to power. Alfred.&#34;", "author":" - Lord Tennyson"},' +
    '{"quote":"&#34;Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.&#34;", "author":" - Carl Bard"},' +
    '{"quote":"&#34;Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.&#34;", "author":" - Henry Ford"},' +
    '{"quote":"&#34;He who angers you conquers you.&#34;", "author":" - Elizabeth Kenny"},' +
    '{"quote":"&#34;Beauty, without expression, tires.&#34;", "author":" - Ralph Waldo Emerson"},' +
    '{"quote":"&#34;The secret of business is to know something that nobody else knows.&#34;", "author":" - Aristotle Onassis"},' +
    '{"quote":"&#34;The greatest discovery of all time is that a person can change his future by merely changing his attitude.&#34;", "author":" -  Oprah Winfrey"},' +
    '{"quote":"&#34;We cannot always build the future of our youth, but we can build our youth for the future.&#34;", "author":" - Franklin D. Roosevelt"},' +
    '{"quote":"&#34;It takes courage to grow up and turn out to be who you really are.&#34;", "author":" - E.E. Cummings"},' +
    '{"quote":"&#34;In this world nothing can be said to be certain, except death and taxes.&#34;", "author":" - Benjamin Franklin"},' +
    '{"quote":"&#34;It is the mark of an educated mind to be able to entertain a thought without accepting it.&#34;", "author":" - Aristotle"},' +
    '{"quote":"&#34;A happy family is but an earlier heaven.&#34;", "author":" - George Bernard Shaw"},' +
    '{"quote":"&#34;Don&#39;t walk in front of me, I may not follow. Don&#39;t walk behind me, I may not lead. Walk beside me and be my friend.&#34;", "author":" - Albert Camus"},' +
    '{"quote":"&#34;Courage doesn&#39;t always roar. Sometimes courage is the little voice at the end of the day that says &#39;I&#39;ll try again tomorrow.&#34;", "author":" - Mary Anne Radmacher"},' +
    '{"quote":"&#34;Education is like a double-edged sword. It may be turned to dangerous uses if it is not properly handled.&#34;", "author":" - Wu Ting-Fang"},' +
    '{"quote":"&#34;Walking with a friend in the dark is better than walking alone in the light.&#34;", "author":" - Helen Keller"},' +
    '{"quote":"&#34;Happiness is not a goal; it is a by-product.&#34;", "author":" - Eleanor Roosevelt"},' +
    '{"quote":"&#34;Always forgive your enemies; nothing annoys them so much.&#34;", "author":" - Oscar Wilde"},' +
    '{"quote":"&#34;The only true wisdom is knowing that you know nothing.&#34;", "author":" - Socrates"},' +
    '{"quote":"&#34;As a well-spent day brings happy sleep, so a life well spent brings happy death.&#34;", "author":" - Leonardo da Vinci"},' +
    '{"quote":"&#34;Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.&#34;", "author":" - Winston Churchill"},' +
    '{"quote":"&#34;Children are our most valuable resource.&#34;", "author":" - Herbert Hoover"},' +
    '{"quote":"&#34;Love is, above all else, the gift of oneself.&#34;", "author":" - Jean Anouilh"},' +
    '{"quote":"&#34;Music in the soul can be heard by the universe.&#34;", "author":" - Lao Tzu"},' +
    '{"quote":"&#34;Peace begins with a smile.&#34;", "author":" - Mother Teresa"},' +
    '{"quote":"&#34;Success is liking yourself, liking what you do, and liking how you do it.&#34;", "author":" - Maya Angelou"},' +
    '{"quote":"&#34;A friend is someone who knows all about you and still loves you.&#34;", "author":" - Elbert Hubbard"},' +
    '{"quote":"&#34;Never leave that till tomorrow which you can do today.&#34;", "author":" - Benjamin Franklin"},' +
    '{"quote":"&#34;If you don&#39;t make mistakes, you&#39;re not working on hard enough problems.&#34;", "author":" - Frank Wilczek"},' +
    '{"quote":"&#34;We must learn to live together as brothers or perish together as fools.&#34;", "author":" - Martin Luther King, Jr."},' +
    '{"quote":"&#34;Life is like a camera. Just focus on what&#8217;s important, capture the good times, develop from the negatives, and if things don&#8217;t work out, just take another shot.&#34;", "author":" - Unknown"},' +
    '{"quote":"&#34;When you judge another, you do not define them; you define yourself.&#34;", "author":" - Wayne Dyer"},' +
    '{"quote":"&#34;Opportunity is missed by most people because it is dressed in overalls and looks like work.&#34;", "author":" - Thomas Edison"},' +
    '{"quote":"&#34;Love me when I least deserve it, because that&#8217;s when I really need it.&#34;", "author":" - Swedish Proverb"},' +
    '{"quote":"&#34;The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.", "author":" - Helen Keller"},' +
    '{"quote":"&#34;If you want to test your memory, try to recall what you were worrying about one year ago today.&#34;", "author":" - E. Joseph Cossman"},' +
    '{"quote":"&#34;The real opportunity for success lies within the person and not in the job.&#34;", "author":" - Zig Ziglar"},' +
    '{"quote":"&#34;It takes a great deal of courage to stand up to your enemies, but even more to stand up to your friends.&#34;", "author":" - J. K. Rowling"},' +
    '{"quote":"&#34;Defeat is not bitter unless you swallow it.&#34;", "author":" - Joe Clark"},' +
    '{"quote":"&#34;A mind is like a parachute. It doesn&#8217;t work if it isn&#8217;t open.&#34;", "author":" - Frank Zappa"},' +
    '{"quote":"&#34;The man who removes a mountain begins by carrying away small stones.&#34;", "author":" - Chinese Proverbs"},' +
    '{"quote":"&#34;When you are totally at peace with yourself, nothing can shake you.&#34;", "author":" - Deepam Chatterjee"},' +
    '{"quote":"&#34;Be a first rate version of yourself, not a second rate version of someone else.&#34;", "author":" - Judy Garland"},' +
    '{"quote":"&#34;Your worth consists in what you are and not in what you have.&#34;", "author":" - Thomas Edison"},' +
    '{"quote":"&#34;Others can stop you temporarily – you are the only one who can do it permanently.&#34;", "author":" - Zig Ziglar"},' +
    '{"quote":"&#34;Life has no limitations, except the ones you make.&#34;", "author":" - Les Brown"},' +
    '{"quote":"&#34;Peace comes from within. Do not seek it without.&#34;", "author":" - Muhammad Ali"}]}';
    
    const obj = JSON.parse(quotes);
    let rd = Math.floor(Math.random() * 98); // Returns a random intenger from 0 to 97
    document.querySelector('#text').innerHTML = obj.quotes[rd].quote;
    document.querySelector('#author').innerHTML = obj.quotes[rd].author;

}