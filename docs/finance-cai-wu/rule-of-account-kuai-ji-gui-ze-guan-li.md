# Rule of Account - 会计规则管理

**功能概述 (Overview):**&#x4F1A;计规则维护功能。

**使用场景 (Use Cases):**&#x7CFB;统初始化时或会计规则有变动时使用。

**界面描述 (UI Description):**

<figure><img src="../.gitbook/assets/image (35).png" alt=""><figcaption></figcaption></figure>

**操作 (Step-by-Step Guide):**&#x20;

· 根据需要对会计进行增删改操作。

· 每条会计规则中都包含三个逻辑字段

o  One：代表所选选项中有一个满足条件即符合此规则

o All：代表所选选择中都满足才符合此规则

o None：代表所选选项中不包含所有选项即符合此规则



· 每种个选项中包含多类选项：

o Txn.tag: 代表交易上的财务标签

o Txn.currency:代表交易上的币种

o Txn.from:代表交易上的来源地址

o Txn.to:代表交易上的收款地址

o Org.tag:代表组织上的标签

o Account.tag:代表账户上的标签



· 优先级数字越小优先级越高，每条交易只会匹配优先级最高的符合条件的规则。

· 点击添加，添加规则所对应的分录，即代表该交易会自动生成的分录，通常为一借一贷，选择所对应的科目，借贷方向，和金额系数(通常付款为-1，收款为1)
