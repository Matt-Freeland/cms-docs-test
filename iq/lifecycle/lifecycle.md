---
id: lifecycle
title: Sonatype Lifecycle
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Intro
intro paragraph

<Tabs
groupId='host-type'
defaultValue='on-prem'
values={[
    {label: 'On-Prem', value: 'on-prem'},
        {label: 'Cloud', value: 'cloud'},
]}>
<TabItem value='on-prem'>
{/*markdown works!*/}

## On-Prem Stuff

On-prem content

**Test**

> test block quote

* list item 1
* list item 2


</TabItem>
<TabItem value='cloud'>Cloud Content</TabItem>

</Tabs>

# Genaric Content

Just some stuff 


<Tabs
groupId='host-type'
defaultValue='on-prem'
values={[
    {label: 'On-Prem', value: 'on-prem'},
        {label: 'Cloud', value: 'cloud'},
]}>

<TabItem value='on-prem'>

## More Cloud Stuff 

More on prem content!

</TabItem>
<TabItem value='cloud'>

## Different Stuff for Cloud!

it is here!

</TabItem>
</Tabs>


