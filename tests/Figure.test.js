const Figure = require('../lib/Figure');


it('figure has label ', () => {
  const f = new Figure("1")
  const result = f.label
  expect(result).toBe("1")
});
it('figure has label ', () => {
  const f = new Figure("unknown")
  const result = f.label
  expect(result).toBe("unknown")
});
it('Provides correct term for major subject in figure 1', () => {
  const f = new Figure("1")
  const result = f.majorSubject();
  expect(result.label).toBe("M")
});
it('Provides correct term for major predicate in figure 1', () => {
  const f = new Figure("1")
  const result = f.majorPredicate();
  expect(result.label).toBe("P")
});
it('Provides correct term for major subject in figure 2', () => {
  const f = new Figure("2")
  const result = f.majorSubject();
  expect(result.label).toBe("P")
});
it('Provides correct term for major predicate in figure 2', () => {
  const f = new Figure("2")
  const result = f.majorPredicate();
  expect(result.label).toBe("M")
});
it('Provides correct term for major subject in figure 3', () => {
  const f = new Figure("3")
  const result = f.majorSubject();
  expect(result.label).toBe("M")
});
it('Provides correct term for major predicate in figure 3', () => {
  const f = new Figure("3")
  const result = f.majorPredicate();
  expect(result.label).toBe("P")
});
it('Provides correct term for major subject in figure 4', () => {
  const f = new Figure("4")
  const result = f.majorSubject();
  expect(result.label).toBe("P")
});
it('Provides correct term for major predicate in figure 4', () => {
  const f = new Figure("4")
  const result = f.majorPredicate();
  expect(result.label).toBe("M")
});

// minor premise tests

it('Provides correct term for minor subject in figure 1', () => {
  const f = new Figure("1")
  const result = f.minorSubject();
  expect(result.label).toBe("S")
});
it('Provides correct term for minor predicate in figure 1', () => {
  const f = new Figure("1")
  const result = f.minorPredicate();
  expect(result.label).toBe("M")
});
it('Provides correct term for minor subject in figure 2', () => {
  const f = new Figure("2")
  const result = f.minorSubject();
  expect(result.label).toBe("S")
});
it('Provides correct term for minor predicate in figure 2', () => {
  const f = new Figure("2")
  const result = f.minorPredicate();
  expect(result.label).toBe("M")
});
it('Provides correct term for minor subject in figure 3', () => {
  const f = new Figure("3")
  const result = f.minorSubject();
  expect(result.label).toBe("M")
});
it('Provides correct term for minor predicate in figure 3', () => {
  const f = new Figure("3")
  const result = f.minorPredicate();
  expect(result.label).toBe("S")
});
it('Provides correct term for minor subject in figure 4', () => {
  const f = new Figure("4")
  const result = f.minorSubject();
  expect(result.label).toBe("M")
});
it('Provides correct term for minor predicate in figure 4', () => {
  const f = new Figure("4")
  const result = f.minorPredicate();
  expect(result.label).toBe("S")
});
