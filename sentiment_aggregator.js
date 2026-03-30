/**
 * Utility to calculate the net approval rating for a specific report.
 */
function calculateApproval(upvotes, downvotes) {
    const total = upvotes + downvotes;
    if (total === 0) return "No data";
    
    const rating = (upvotes / total) * 100;
    return `${rating.toFixed(1)}% Approval`;
}

// Example: 150 👍 and 12 👎
console.log(`Report Sentiment: ${calculateApproval(150, 12)}`);
