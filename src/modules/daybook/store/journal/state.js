export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), // 12231354864
      date: new Date().toDateString(), //sat 23, 01 Jan
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quae voluptatibus adipisci nam quia magnam autem veniam cumque! Labore, unde.",
      picture: null, // https://
    },

    {
      id: new Date().getTime() + 1000, // 12231354864
      date: new Date().toDateString(), //sat 23, 01 Jan
      text: "Natus, rerum laudantium accusamus blanditiis doloremque porro officiis eius mollitia dolore corporis nisi debitis vel deserunt iste id nostrum, corrupti cumque accusantium vero alias suscipit libero ab modi. Officia dolorum dicta quas?",
      picture: null, // https://
    },

    {
      id: new Date().getTime() + 2000, // 12231354864
      date: new Date().toDateString(), //sat 23, 01 Jan
      text: "Similique in excepturi adipisci commodi explicabo nam dolorum delectus, harum amet impedit quam ratione culpa? Quia aliquam voluptas odit nostrum est temporibus unde minus fugiat, voluptate mollitia illo omnis error doloremque vero inventore qui repudiandae, vitae voluptatum praesentium deserunt voluptatem cum a.",
      picture: null, // https://
    },
  ],
});
