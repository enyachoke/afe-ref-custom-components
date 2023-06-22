import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('afe-diagram-embed')
export class AfeDiagramEmbedComponent extends LitElement {
  @property({ type: String })
  value: string;

  @property({ type: Object })
  question: any;

  @property({ type: Boolean })
  disabled = false;

  render() {
    const diagramUrl = '<URL to the diagram image>'; // Replace with the URL of the diagram image
  
    return html`
      <div>
        <img src="${diagramUrl}" alt="Diagram"> <!-- Display the diagram image -->
  
        <button @click=${this.handleAnnotationClick} ?disabled=${this.disabled}>
          Annotate Diagram
        </button>
      </div>
    `;
  }

  handleAnnotationClick() {
    // Retrieves the diagram data and metadata
  const diagramData = this.value;
  const metadata = this.question.metadata;

  // the query parameters string
  const queryParams = new URLSearchParams();
  queryParams.append('diagramData', diagramData);
  queryParams.append('metadata', JSON.stringify(metadata));

  //  URL of the external application with the query parameters
  const externalAppURL = `https://example.com/annotation-tool?${queryParams.toString()}`;

  // Open the external application in a new window/tab
  window.open(externalAppURL, '_blank');
  }
}
