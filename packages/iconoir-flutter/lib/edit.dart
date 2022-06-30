import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Edit extends StatelessWidget {
  const Edit({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Edit.svg');
}
