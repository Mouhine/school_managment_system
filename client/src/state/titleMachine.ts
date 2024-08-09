import { setup } from "xstate";

const feedbackMachine = setup({
  types: {
    context: {} as { feedback: string },
    events: {} as { type: "feedback.good" } | { type: "feedback.bad" },
  },
  actions: {
    logTelemetry: () => {
      // TODO: implement
    },
  },
}).createMachine({
  id:"hello",
  context:{
    feedback:""
  },

  states:{
    on:{
      
    }
  }
});
