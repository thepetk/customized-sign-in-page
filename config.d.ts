export interface Config {
    app: {
      /**
       * Support configuration for the sign-in page
       */
      support?: {
        /**
         * URL for the main support page
         */
        url: string;
        /**
         * List of support items to display
         */
        items?: Array<{
          title: string;
          text?: string;
          icon?: string;
          links?: Array<{
            url: string;
            title: string;
          }>;
        }>;
      };
    };
  }