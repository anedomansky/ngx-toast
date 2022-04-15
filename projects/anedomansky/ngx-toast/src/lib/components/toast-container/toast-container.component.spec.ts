import { render } from '@testing-library/angular';
import { ToastContainerComponent } from './toast-container.component';

describe('ToastContainerComponent', () => {
  let componentContainer: Element;
  let changeFunction: (properties: Partial<ToastContainerComponent>) => void;

  beforeEach(async () => {
    const { container, change } = await render(ToastContainerComponent);

    componentContainer = container;
    changeFunction = change;
  });

  it('should render toast-container by default', () => {
    const container = componentContainer.querySelector('.toast-container');

    expect(container).toBeVisible();
  });
});
