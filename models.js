/**
 * As of 6.23.2025
 */
class Model {
    constructor(model) {
        console.log(model);
        switch(model) {
            case "gpt-4o":
                this.input = 2.5
                this.cachedInput = 1.25
                this.output = 10
                break;
            
            case "gpt-4o-mini":
                this.input = .15
                this.cachedInput = .075
                this.output = .6
                break;

            case "gpt-4.1":
                this.input = 2
                this.cachedInput = .5
                this.output = 8
                break;

            case "gpt-4.1-mini":
                this.input = .4
                this.cachedInput = .1
                this.output = 1.6
                break;

            case "gpt-o1":
                this.input = 15
                this.cachedInput = 7.5
                this.output = 60
                break;

            case "gpt-o1-mini":
                this.input = 1.1
                this.cachedInput = .55
                this.output = 4.4
                break;

            case "claude-opus-4":
                this.input = 15
                this.output = 75
                break;
            
            case "claude-sonnet-4":
                this.input = 3
                this.output = 15
                break;
            
            case "claude-opus-3":
                this.input = 15
                this.output = 75
                break;
            
            case "claude-sonnet-3.7":
                this.input = 3
                this.output = 15
                break;

            case "claude-haiku-3.5":
                this.input = .8
                this.output = 4
                break;

            case "gemini-2.5-pro":
                this.input = 1.25
                this.output = 10
                break;
            
            case "gemini-2.5-flash":
                this.input = .3
                this.output = 2.5
                break;

        }
    }
}