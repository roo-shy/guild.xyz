import { Tag, TagLabel, TagLeftIcon, Tooltip, Wrap } from "@chakra-ui/react"
import DisplayCard from "components/common/DisplayCard"
import Link from "components/common/Link"
import { Users } from "phosphor-react"
import { Guild } from "temporaryData/types"
import useRequirementLabels from "./hooks/useRequirementLabels"

type Props = {
  guildData: Guild
}

const GuildCard = ({ guildData }: Props): JSX.Element => {
  const requirementLabels = useRequirementLabels(guildData.requirements)

  return (
    <Link
      href={`/guild/${guildData.urlName}`}
      _hover={{ textDecor: "none" }}
      borderRadius="2xl"
      w="full"
    >
      <DisplayCard image={guildData.imageUrl} title={guildData.name}>
        <Wrap zIndex="1">
          <Tag as="li">
            <TagLeftIcon as={Users} />
            <TagLabel>{guildData.members?.length || 0}</TagLabel>
          </Tag>
          <Tooltip label={requirementLabels}>
            <Tag as="li">
              <TagLabel>
                {(() => {
                  const reqCount = guildData.requirements?.length || 0
                  return `${reqCount} requirement${reqCount > 1 ? "s" : ""}`
                })()}
              </TagLabel>
            </Tag>
          </Tooltip>
        </Wrap>
      </DisplayCard>
    </Link>
  )
}

export default GuildCard