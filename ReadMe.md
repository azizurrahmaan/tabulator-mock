### Simple Tabulator Mock

This is not a complete project, just some files to demonstrate how we can mock the tabulator in jest.

The mock can be found in ```/tests/integration/__mocks__/Tabulator.js```. We're telling jest to use this mock in this file ```/tests/integration/setup-tests.js```. And ```setup-tests.js``` is being consumed by jest because we configured it in ```jest.config.js```.
