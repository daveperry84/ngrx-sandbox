export const qAndAData: { question: string, answer: string }[] = [
    {
        question: 'What are the trade-offs of using NgRx and RxJS in form handling?',
        answer: `
            <p>Advantages</p>

            <ul>
                <li>A centralised, single source of truth for our form state</li>
                <li>Easier to debug - due to single source of truth, plus clear separation of concerns</li>
                <li>Simpler form components as a result of delegating logic to reducers</li>
                <li>No need for tightly coupled components needing to share data - just retrieve the state from anywhere in the app using a selector.</li>
                <li>Scalability - as your app scales up, no need to keep refactoring components to re-manage state when introducing new functionality.</li>
                <li>RxJS allows us to manage and manipulate complex asynchronous tasks, such as API calls, more easily.</li>
            </ul>

            <p>Disadvantages</p>

            <ul>
                <li>More boilerplate code - need to create actions, reducers, selectors, etc. More files to manage, architect, understand and it adds to the bloat 
                    of the project. It is another library to maintain and upgrade.</li>
                <li>Potential memory leaks and performance issues - see answer to question 2 below.</li>
                <li>Much steeper learning curve for new developers with RxJS and NgRx, knowledge of RxJS required in order to use NgRx to full potential.</li>
                <li>RxJS can be difficult to debug and requires a firm understanding of the library.</li>
            </ul>   
        `,
    },
    {
        question: 'What are the potential performance pitfalls or over-engineering issues that can arise when using RxJS for simple form interactions?',
        answer: `
            <p>
                Memory leaks are a common performance concern when using RxJS - memory will be allocated to an RxJS subscription until it is unsubscribed 
                which means it can continue to use memory that is no longer needed if the developer forgets to unsubscribe from the observable when it is 
                no longer required. Over time, this can tank the CPU and cause performance issues in the browser. When using RxJS, the onus is on the 
                developer to manually unsubscribe from Observable subscriptions when they are no longer in use (usually onDestroy of the component). 
                There are a number of ways to unsubscribe from Observables, however the most popular methods are:
            </p>

            <ul>
                <li>Use an Async pipe in the template (allows Angular to manage the subscription and will automatically unsubscribe when the component is destroyed).</li>
                <li>Use RxJS operator take(1) to immediately unsubscribe as soon as the first value is received.</li>
                <li>Use RxJS operator takeUntil() and complete the subscription on the destroy hook of the component.</li>
            </ul>

            <p>RxJS is super powerful when used correctly, but it is complex and difficult to learn, which can lead to some over-engineering issues:</p>

            <ul>
                <li>Overuse of RxJS and KISS - For simple form interactions, you may not even require RxJS and using it is just a symptom of bad habit and/or 
                    lack of knowledge. For example, if you just need to retrieve form data and display it on the page, you don’t actually need RxJS - you can 
                    simply achieve this by storing the retrieved data in an Observable and using an Async pipe in the template.</li>
                <li>Nesting subscriptions - Where there are multiple asynchronous pieces of code that need to be executed in sequence (for example, if we first 
                    need to retrieve the user id to then allow us to retrieve the correct form), it is tempting to nest subscriptions in order to achieve the 
                    result. This is an anti-pattern however that reduces readability and maintainability of the code and can lead to “pyramid of doom” thinking 
                    (“if I can nest once, why not nest again, and again, and again?”). We should instead use higher-order RxJS operators to flatten the observable 
                    to one stream (e.g. mergeMap, switchMap, etc.).</li>
                <li>Using incorrect RxJS operators - the use of incorrect RxJS operators can lead to multiple HTTP calls to the same endpoint, race conditions and 
                    other unwanted symptoms. For example, when subscribing to a form group’s valueChanges, you may only want to emit the latest observable so that 
                    quick, successive keypress events aren’t being fired every time and causing a slowdown in performance - then you would use switchMap for this 
                    use case.</li>
            </ul>
        `,
    },
    {
        question: 'When and why would you choose not to use NgRx/RxJS for form state management?',
        answer: `
            <p>When considering whether to use NgRx store for form state management, it is a good idea to check your requirements against the SHARI principle:</p>

            <span><strong>Shared:</strong> state that is accessed by many components and services. If your app is small in scale and contains only one simple form for which 
                the state only needs to be accessed by a small number of components, then you may prefer to opt for using Angular services to persist state 
                instead of importing a whole new library.</span></br>
            <span><strong>Hydrated:</strong> state that is persisted and rehydrated from external storage - you may wish to store the state of a form in local storage and 
                rehydrate the form on reload so the user can continue where they left off at a later time.</span></br>
            <span><strong>Available:</strong> state that needs to be available when re-entering routes. For example, if you have concerns over leaking personal data then 
                you're probably not going to use any kind of state management here. A form on a login page would be a good example of this.</span></br>
            <span><strong>Retrieved:</strong> state that must be retrieved with a side-effect - You may not need NgRx or state management if your form is a one-time entry, 
                for example a finance application form that is only submitted and never retrieved via HTTP.</span></br>
            <span><strong>Impacted:</strong> state that is impacted by actions from other sources. For instance, a form that has multiple sections and requires pagination - 
                this might be a good use case for maintaining state via NgRx.</span></br></br>

            <p>Ultimately, NgRx is better suited to a larger, more complex application with a lot of user interactions and many data sources, where managing 
                state in services is becoming too cumbersome and is no longer sufficient.</p>
        `,
    }
]