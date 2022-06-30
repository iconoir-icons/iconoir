import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GitCommit extends StatelessWidget {
  const GitCommit({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GitCommit.svg');
}
