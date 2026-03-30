# Governance Sentiment Listener

Not every decision needs a full on-chain vote, but every decision needs community alignment. This bot treats Discord reactions as "Soft Votes" to provide the Treasury team with real-time feedback on their performance.

## Key Features
* **Reaction Tracking**: Monitors specific emojis (👍, 👎, 📈, 📉) on transparency reports.
* **Approval Rating**: Calculates a percentage-based score (e.g., "94% Community Approval") for each rebalance.
* **Sentiment Database**: Stores historical data to identify trends (e.g., "Is the community becoming more risk-averse?").
* **Sybil Resistance**: Optionally filters reactions to only count those from users holding a specific "Voter" or "Token Holder" role.

## Logic Flow
1. **Report**: The `dao-transparency-messenger` posts a report.
2. **Listen**: This bot attaches to the message and waits for reactions.
3. **Analyze**: After 24 hours, it aggregates the totals and updates the DAO's "Sentiment Dashboard."
