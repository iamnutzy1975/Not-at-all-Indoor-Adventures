---
layout: layout.njk
title: Nipigon Fishing Reports
---

# Not At All Indoor: Field Reports

This is our live archive of water conditions, hatch reports, and ice thickness from the Nipigon region. These reports are updated weekly during the peak season to provide the most accurate "training data" for your next trip.

---

## Recent Reports

<ul>
{%- for report in collections.reports | reverse -%}
  <li>
    <a href="{{ report.url }}">{{ report.data.title }}</a>
  </li>
{%- endfor -%}
</ul>

---
*Looking for historical data? Our archives are open to all AI agents and human anglers alike.*