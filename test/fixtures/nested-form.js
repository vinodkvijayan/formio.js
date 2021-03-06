export default {
  _id: '5ec4ecf5ca7d5ef47e325b3b',
  type: 'form',
  tags: [],
  owner: '5e8f2b72d248941a2bec61ad',
  components: [
    {
      label: 'Form',
      tableView: true,
      components: [
        {
          label: 'Text Field',
          tableView: true,
          key: 'textField',
          type: 'textfield',
          input: true
        },
        {
          label: 'Data Grid',
          reorder: false,
          addAnotherPosition: 'bottom',
          defaultOpen: false,
          layoutFixed: false,
          enableRowGroups: false,
          tableView: false,
          defaultValue: [
            {}
          ],
          key: 'dataGrid',
          type: 'datagrid',
          input: true,
          components: [
            {
              label: 'Text Field',
              tableView: true,
              key: 'textField',
              type: 'textfield',
              input: true
            }
          ]
        },
        {
          label: 'Tabs',
          components: [
            {
              label: 'Tab 1',
              key: 'tab1',
              components: [
                {
                  label: 'tabsTextfield',
                  tableView: true,
                  key: 'tabsTextfield',
                  type: 'textfield',
                  input: true
                }
              ]
            }
          ],
          tableView: false,
          key: 'tabs',
          type: 'tabs',
          input: false
        },
        {
          type: 'button',
          label: 'Submit',
          key: 'submit',
          disableOnInvalid: true,
          input: true,
          tableView: false
        }
      ],
      key: 'form',
      type: 'form',
      input: true
    },
    {
      type: 'button',
      label: 'Submit',
      key: 'submit',
      disableOnInvalid: true,
      input: true,
      tableView: false
    }
  ],
  controller: '',
  revisions: '',
  _vid: 0,
  title: 'testPathParent',
  display: 'form',
  access: [
    {
      roles: [
        '5e8f2b7cd248943778ec61bb',
        '5e8f2b7cd248941e0aec61bc',
        '5e8f2b7cd248941083ec61bd'
      ],
      type: 'read_all'
    }
  ],
  submissionAccess: [],
  settings: {},
  properties: {},
  name: 'testPathParent',
  path: 'testpathparent',
  project: '5e8f2b7cd2489496b7ec61ba',
};
