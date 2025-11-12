import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  it('should create an instance', () => {
    const pipe = new SafePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform input securely', () => {
    const pipe = new SafePipe();
    const unsafeInput = '<script>alert("xss")</script>';
    const safeOutput = pipe.transform(unsafeInput);
    expect(safeOutput).not.toContain('script');
  });

  it('should handle large inputs efficiently', () => {
    const pipe = new SafePipe();
    const largeInput = 'a'.repeat(1000000);
    const startTime = performance.now();
    const safeOutput = pipe.transform(largeInput);
    const endTime = performance.now();
    expect(endTime - startTime).toBeLessThan(50);
    expect(safeOutput.length).toEqual(largeInput.length);
  });
});