import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, input, output, effect, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import {
  DiagramComponent as SyncfusionDiagramComponent,
  NodeModel,
  ConnectorModel,
  Connector,
  Node
} from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-diagrams',
  standalone: true,
  imports: [CommonModule, DiagramModule],
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagramsComponent implements OnInit, OnDestroy {
  diagram = viewChild<SyncfusionDiagramComponent>('diagram');

  // Data
  nodes = input<NodeModel[]>([]);
  connectors = input<ConnectorModel[]>([]);

  // Settings
  pageSettings = input<any>({
    width: 1000,
    height: 1000,
    orientation: 'Landscape',
    showPageBreaks: false
  });
  snapSettings = input<any>({
    horizontalGridlines: { lineColor: '#e0e0e0' },
    verticalGridlines: { lineColor: '#e0e0e0' },
    constraints: 0
  });
  rulerSettings = input<any>({
    showRulers: true
  });
  layout = input<any>({
    type: 'None'
  });
  dataSourceSettings = input<any>({});
  selectedItems = input<any>({
    constraints: 0
  });
  constraints = input<any>(0);
  tool = input<any>('Default');
  drawingObject = input<any>({});

  // Size
  height = input<string | number>('600px');
  width = input<string | number>('100%');
  customClass = input<string | undefined>(undefined);

  // Events
  created = output<any>();
  nodeClick = output<any>();
  connectorClick = output<any>();
  selectionChange = output<any>();
  scrollChange = output<any>();
  zoomChange = output<any>();
  historyChange = output<any>();
  objectDoubleClick = output<any>();
  textEdit = output<any>();
  dragEnter = output<any>();
  dragLeave = output<any>();
  dragOver = output<any>();
  drop = output<any>();

  constructor() {
    effect(() => {
      // Handle necessary updates if template binding is insufficient
    });
  }

  ngOnInit(): void {
    // Initialize if needed
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Get diagram instance
   */
  getDiagramInstance(): SyncfusionDiagramComponent | null {
    return this.diagram() || null;
  }

  /**
   * Add node
   */
  addNode(node: NodeModel): void {
    this.diagram()?.add(node);
  }

  /**
   * Add connector
   */
  addConnector(connector: ConnectorModel): void {
    this.diagram()?.add(connector);
  }

  /**
   * Remove node
   */
  removeNode(nodeId: string): void {
    const d = this.diagram();
    if (d) {
      const node = d.nodes.find((n: any) => n.id === nodeId);
      if (node) {
        d.remove(node);
      }
    }
  }

  /**
   * Remove connector
   */
  removeConnector(connectorId: string): void {
    const d = this.diagram();
    if (d) {
      const connector = d.connectors.find((c: any) => c.id === connectorId);
      if (connector) {
        d.remove(connector);
      }
    }
  }

  /**
   * Clear diagram
   */
  clear(): void {
    this.diagram()?.clear();
  }

  /**
   * Select all
   */
  selectAll(): void {
    this.diagram()?.selectAll();
  }

  /**
   * Unselect all
   */
  unselectAll(): void {
    this.diagram()?.clearSelection();
  }

  /**
   * Copy
   */
  copy(): void {
    this.diagram()?.copy();
  }

  /**
   * Paste
   */
  paste(): void {
    this.diagram()?.paste();
  }

  /**
   * Cut
   */
  cut(): void {
    this.diagram()?.cut();
  }

  /**
   * Undo
   */
  undo(): void {
    this.diagram()?.undo();
  }

  /**
   * Redo
   */
  redo(): void {
    this.diagram()?.redo();
  }

  /**
   * Zoom in
   */
  zoomIn(): void {
    this.diagram()?.zoomTo({ type: 'ZoomIn' });
  }

  /**
   * Zoom out
   */
  zoomOut(): void {
    this.diagram()?.zoomTo({ type: 'ZoomOut' });
  }

  /**
   * Fit to page
   */
  fitToPage(): void {
    const d = this.diagram();
    if (d) {
      (d as any).fitToPage({ mode: 'Page', region: 'Content' });
    }
  }

  /**
   * Reset zoom
   */
  resetZoom(): void {
    const d = this.diagram();
    if (d) {
      (d as any).reset();
    }
  }

  /**
   * Export as image
   */
  exportImage(fileName?: string): void {
    const d = this.diagram();
    if (d) {
      (d as any).exportDiagram({ format: 'PNG', fileName: fileName || 'Diagram' });
    }
  }

  /**
   * Export as SVG
   */
  exportSvg(fileName?: string): void {
    const d = this.diagram();
    if (d) {
      (d as any).exportDiagram({ format: 'SVG', fileName: fileName || 'Diagram' });
    }
  }

  /**
   * Print
   */
  print(): void {
    const d = this.diagram();
    if (d) {
      (d as any).print();
    }
  }

  /**
   * Load diagram from JSON
   */
  loadDiagram(jsonData: any): void {
    this.diagram()?.loadDiagram(JSON.stringify(jsonData));
  }

  /**
   * Save diagram as JSON
   */
  saveDiagram(): any {
    const d = this.diagram();
    if (d) {
      return JSON.parse(d.saveDiagram());
    }
    return null;
  }

  /**
   * Get selected nodes
   */
  getSelectedNodes(): NodeModel[] {
    return (this.diagram()?.selectedItems.nodes as NodeModel[]) || [];
  }

  /**
   * Get selected connectors
   */
  getSelectedConnectors(): ConnectorModel[] {
    return (this.diagram()?.selectedItems.connectors as ConnectorModel[]) || [];
  }

  /**
   * Refresh
   */
  refresh(): void {
    this.diagram()?.dataBind();
  }
  /**
   * Event handlers
   */
  onCreated(event: any): void {
    this.created.emit(event);
  }

  onNodeClick(event: any): void {
    this.nodeClick.emit(event);
  }

  onConnectorClick(event: any): void {
    this.connectorClick.emit(event);
  }

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event);
  }

  onScrollChange(event: any): void {
    this.scrollChange.emit(event);
  }

  onZoomChange(event: any): void {
    this.zoomChange.emit(event);
  }

  onHistoryChange(event: any): void {
    this.historyChange.emit(event);
  }

  onObjectDoubleClick(event: any): void {
    this.objectDoubleClick.emit(event);
  }

  onTextEdit(event: any): void {
    this.textEdit.emit(event);
  }

  onDragEnter(event: any): void {
    this.dragEnter.emit(event);
  }

  onDragLeave(event: any): void {
    this.dragLeave.emit(event);
  }

  onDragOver(event: any): void {
    this.dragOver.emit(event);
  }

  onDrop(event: any): void {
    this.drop.emit(event);
  }
}

