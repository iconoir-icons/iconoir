import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GitPullRequest extends StatelessWidget {
  const GitPullRequest({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GitPullRequest.svg');
}
