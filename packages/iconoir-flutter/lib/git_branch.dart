import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GitBranch extends StatelessWidget {
  const GitBranch({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GitBranch.svg');
}
