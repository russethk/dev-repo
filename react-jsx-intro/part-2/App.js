const App = () => {
    return (
        <div>
            <Tweet name="Karen Russeth" username="krusseth" date={new Date().toDateString()} message="Hello world!" />
            <Tweet name="Scott Orol" username="rsorol" date={new Date().toDateString()} message="Hi, Mom! How are you today?" />
            <Tweet name="Karen Russeth" username="krusseth" date={new Date().toDateString()} message="I'm great Scott! How are you?" />
        </div> 
    );
}
