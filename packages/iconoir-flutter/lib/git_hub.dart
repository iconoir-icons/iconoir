import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GitHub extends StatelessWidget {
  const GitHub({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GitHub.svg');
}
