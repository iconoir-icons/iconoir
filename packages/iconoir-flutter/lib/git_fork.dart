import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GitFork extends StatelessWidget {
  const GitFork({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GitFork.svg');
}
